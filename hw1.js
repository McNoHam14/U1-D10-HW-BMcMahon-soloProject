/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

console.log("\n--------------------EXCERCISE A--------------------\n")


let test = "Ben";

console.log(test)

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/

console.log("\n--------------------EXCERCISE B--------------------\n")

let num1 = 10;
let num2 = 20;

let sum = num1+num2;

console.log(sum)

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

console.log("\n--------------------EXCERCISE C--------------------\n")

// let random = egRandom

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

let random = randomNum(0, 20);

console.log(random)


/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

console.log("\n--------------------EXCERCISE D--------------------\n")

let me = {
    name:"Ben", surname:"McMahon", age:32
}

console.log(me)


/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/

console.log("\n--------------------EXCERCISE E--------------------\n")

delete me.age
console.log(me)

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/

console.log("\n--------------------EXCERCISE F--------------------\n")

me.skills = ['Scratch', 'C', 'Python']
console.log(me.skills)

/*
//Array to push

let me1 = {
    name:"Ben", surname:"McMahon", age:32
}

//Array to push
let skills = ['Scratch', 'C', 'Python']

me1.skills.push(skills);

console.log(me1)
*/

/*let skills = ['Scratch', 'C', 'Python']
me.skillsArray.push(skills);

console.log(me)
*/

/*
//Object to push to
let me = {
    name:"Ben", surname:"McMahon", age:32, skillsArray: []
}

//Array to push
let skills = ['Scratch', 'C', 'Python']

me.skillsArray.push(skills);

console.log(me)
*/

/* let skills = ['Scratch', 'C', 'Python'];
skills.push(me);

console.log(me);
*/


/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

console.log("\n--------------------EXCERCISE G--------------------\n")

me.skills.pop();
console.log(me.skills)

/* skills.splice(0, -1)

console.log(me)
*/