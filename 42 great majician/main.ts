
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */


let majicians:string[] = ["mike","Donalds","Tom"];
function show_magicians(majicians:string[]){
    majicians.forEach(majician =>{ console.log(majician)})
}


function make_great(majicians: string[]){
    for(let i=0;i<majicians.length;i++){
               majicians[i] = majicians[i] + " The Great";
                console.log(majicians[i])
    }
} 
show_magicians(majicians);
make_great(majicians);
console.log(majicians); // confirming that the array is changed in array form.