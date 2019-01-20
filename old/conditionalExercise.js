var userAge = prompt("Please enter your age?");

if (userAge < 0) {
    console.log("Please enter a positive number.")
}
else if (userAge == 21) {
    console.log("happy 21st birthday!!")
}
else if (!(userAge % 2 == 0)) {
    console.log("your age is odd!")
}
if (userAge % Math.sqrt(userAge) === 0) {
    console.log("Perfect Square!")
}