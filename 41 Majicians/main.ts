/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let majicians:string[] = ["mike","Donalds","Tom"];
function show_magicians(majicians:string[]){
    majicians.forEach(majician =>{ console.log(majician)})
}



show_magicians(majicians);

