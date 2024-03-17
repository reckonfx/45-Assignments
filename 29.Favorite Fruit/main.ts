/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.*/

let myFavFruits: string[] = ["Mango","Strawberry","banana"];
let searchItem: string = "Strawberry";


if (myFavFruits.includes(searchItem)){
    console.log(`Your favourite Fruite is ${searchItem}`);
    
}
if (myFavFruits.includes(searchItem)){
    console.log(`Your favourite Fruite is ${searchItem}`);

}
if (myFavFruits.includes(searchItem)){
    console.log(`Your favourite Fruite is ${searchItem}`);

}
if (myFavFruits.includes(searchItem)){
     console.log(`Your favourite Fruite is ${searchItem}`);
}

let index = myFavFruits.indexOf(searchItem);

if( index !== -1){
    console.log(`${searchItem} is in your list`);

}else {
    console.log(`${searchItem} is not in your list`);
}

// • Make a array of your three favorite fruits and call it favorite_fruits.

let favorite_fruits: string[ ]= ["Banana","Mango","Pineapple"];

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!






//  for(let i : number=0;i<favorite_fruits.length;i++){
//     favorite_fruits.find(check =>{return check == favorite_fruits[i]})
//     console.log(`my favorite fruit is  ${favorite_fruits[i]}` );
// }


if (favorite_fruits.includes("Banana")){
    console.log("you really like Banana");
}
 else if (favorite_fruits.find(x => x==="Bonana")) {
    console.log("you like Banana");
    
}
else if (favorite_fruits.includes("Pineapple")){
    console.log("you like Pineapple");
}
else if (favorite_fruits.includes("Mango")){
    console.log(" you like Mango");

} else(console.log( "you don't really like Bananas"));



