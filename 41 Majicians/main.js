"use strict";
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
let majicians = ["mike", "Donalds", "Tom"];
function show_magicians(majicians) {
    majicians.forEach(majician => { console.log(majician); });
}
function make_great(majicians) {
    for (let i = 0; i < majicians.length; i++) {
        majicians[i] = majicians[i] + " The Great";
        //    console.log(majicians[i])
    }
}
show_magicians(majicians);
make_great(majicians);
console.log(majicians);
