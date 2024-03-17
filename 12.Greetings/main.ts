//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, 
//but each message should be personalized with the person’s name.

let fNames: string[] =["aamir","salman","Abdullah","Abdul Hadi","saleem"];

let x : string ="";




for (let i : number = 0; i < fNames.length; i++){     //generating index number in i veriable
    console.log( ` Helllo ${fNames[i]} , how are you today `);
                                                 
}
//second method......

fNames.forEach(loop => console.log(`${loop} , How are you doing today ?` ));