/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt(size = "large", message = "I Love TypeScript") {
    console.log(`Make a Tshirt size ${size} and print a message on it as "${message}"`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Code & Code");
make_shirt();
export {};
