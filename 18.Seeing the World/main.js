// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Store the locations in a array. Make sure the array is not in alphabetical order.
var cities = ["Karachi", "Amsterdam", "Vancouver", "Ontario", "Abu Dhabi"];
//Print your array in its original order.
console.log("original state:", cities);
//Print your array in alphabetical order without modifying the actual list.
var sortedArray = cities.slice().sort();
console.log("Sorted Array with change in original :", sortedArray);
// checking  array's original state
console.log("Checking original Array", cities);
// // Print your array in reverse alphabetical order without changing the order of the original list.
var reverse = cities.slice().reverse();
console.log("reverse order without changing original array", reverse);
// //Show that your array is still in its original order by printing it again.
console.log("Checking original Array", cities);
// //reversing the order of array again and checking it's  reverse order
console.log(" Reverse sorting original Array now", cities.reverse());
// //Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reversing again to make it's original state", cities.reverse());
// //Sort your array so it’s stored in alphabetical order.
cities.sort();
// // Print the array to show that its order has been changed.
console.log("Original array is sorted", cities);
// //Sort to change your array so it’s stored in reverse alphabetical order.
// // Print the list to show that its order has changed.
cities.reverse();
console.log("Reverse Sorted original array", cities);
