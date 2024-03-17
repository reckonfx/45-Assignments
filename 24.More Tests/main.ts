/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
 let car: string = "Civic";
 let truck: string= "Hino";
 let myName: string = "aamir"
 let num1: number = 10;
 let num2: number = 20;

 console.log("is car more fun to drive then truck? I predict false"); // as per Ascii Code Value Added to each other
 console.log(car == truck); //false
 console.log(car != truck);  //True

 console.log("is My Name in lowercase? I predict True");
 console.log(myName == myName.toLowerCase());
 console.log(myName !== myName.toLowerCase());

console.log( "Numerical comparisions");
console.log(num1 == num2); // i predict False
console.log(num1 !== num2);// i predict true
console.log(num1 > num2);  //i predict false
console.log(num1 < num2);  // i predict true
console.log(num1 !< num2); //i predict false  
console.log(num1 !> num2); // i predict true   
console.log(num1 >= num2);  // i predict false
console.log(num1 <= num2);  // i predict true

console.log(" tests with and , or operators");

// AND operation

if (num1>num2 && num2<num1 ){
    console.log( true);
    }else{
        console.log("false");
    }
// Or operation

    if ( num1<num2 || num2>=num1){
        console.log("true");
    }else{
        console.log("False");
    }
    //Test whether an item is in a array
    let items: string[] = ["shoes","bags","laptop","books"];
    let count:  boolean = items.includes("Laptop");
    console.log(count);
   
   
   // Test whether an item is not in a array
   let items2: string[] = ["shoes","bags","laptop","books"];
    let count2:  boolean = items2.includes("laptop");
       
   
    console.log(count2);