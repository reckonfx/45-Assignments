//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

//...........First way to do this.............
//let guests : string[] = ["saleem",'Khala Jan',"Baji","Farhan"];
// console.log(`Helloo ${guests[0]},i would like to invite you and your family to my Graduation Dinner`);
// console.log(`Helloo ${guests[1]},i would like to invite you and your family to my Graduation Dinner`);
// console.log(`Helloo ${guests[2]},i would like to invite you and your family to my Graduation Dinner`);
// console.log(`Helloo ${guests[3]},i would like to invite you and your family to my Graduation Dinner`);


let guests : string[] = ["saleem",'Khala Jan',"Baji","Farhan"];

//................another way to do this...............


// for (let i: number=0;i< guests.length;i++ ){
//     console.log(`Helloo ${guests[i]},i would like to invite you and your family to my Graduation Dinner`);

// }



//...........third way to solve this.

guests.forEach(loop => console.log(`Hello ${loop} , i would like to invite you to my graduation dinner`));