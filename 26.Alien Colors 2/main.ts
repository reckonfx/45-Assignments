/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.*/



let alien_color: string = "green";
if (alien_color=="green"){
    console.log("Player Just earned 5 points for shooting the Alien");
}else {
    console.log("no alein was shot");
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alien_color="yellow";
if ( alien_color != "green"){
    console.log("Played just earned 10 points ");
}

// • Write one version of this program that runs the if block and another that runs the else block. 

alien_color="red";

if ( alien_color == "green"){
    console.log( "Player didn't earn any point");
} else {
    console.log("player earned 10 points by else condition")
}

// 2nd version
if ( alien_color != "green"){
    console.log("Player earned 10 points by if condition");
} else {
    console.log(" player didn't earn any point");
}