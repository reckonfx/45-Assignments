/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
var names = ["aamir123", "salllu202", "kamran000", "anam121", "admin"];
// checking the list is empty or not
if (names.length !== 0) {
    console.log("we have ".concat(names.length, " users in our list"));
}
else {
    console.log("the list is empty");
}
// removing all usernames from the list
names.splice(0);
if (names.length == 0) {
    console.log("we need to find some users");
    console.log("we currently have ".concat(names.length, " users in our list"));
}
else {
    console.log("we still have users in our list");
}
