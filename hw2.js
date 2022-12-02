// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

console.log("\n--------------------EXCERCISE 1--------------------\n")

function dice(min, max) {
    return (Math.floor(Math.random() * (max - min +1)) + min);
}
let spin = dice(1, 6);

console.log(spin)


/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/

console.log("\n--------------------EXCERCISE 2--------------------\n")

function whoIsBigger(num1,num2){
    if (num1>num2){
        return num1;
    } else {
        return num2
    }
}

console.log(whoIsBigger(2,4))
console.log(whoIsBigger(100202,10020))
console.log(whoIsBigger(-100, -99))
console.log(whoIsBigger(-9, 5))

/*
function whoIsBigger(numbers) {
    var constant = 1;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > constant) {
            constant = numbers [i];
        }
        return constant;
    }
}
var numbers = [8, 4];
console.log(whoIsBigger(numbers))
*/ 

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

console.log("\n--------------------EXCERCISE 3--------------------\n")

function splitMe(string){
    let splitArray = string.split(" ");
    return splitArray;
}

console.log(splitMe("This is a example of a string that has been split into an array"))

// let text = "This is a string of words"
// myArray = text.split(" ");
// console.log(myArray)

/* 
function splitMe("string of Words") {
    return arrayOfWords
}
*/

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

console.log("\n--------------------EXCERCISE 4--------------------\n")

function deleteOne(string, bool){
    if(bool){
        return string.substring(1)
    } else {
        return string.substring(0,string.length-1)
    }
}

    console.log(deleteOne("False stringg", false))
    console.log(deleteOne("TTrue string", true))
    console.log(deleteOne("Hello, World!", true))


// function deleteOne()

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/

console.log("\n--------------------EXCERCISE 5--------------------\n")

let str = 'a1 b2 c3';
let noNumbers = str.replace(/[0-9]/g, '')
console.log(noNumbers);

// figure out how to put this into a function

/*
function onlyLetter(string) {
    let 
}
*/

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/

console.log("\n--------------------EXCERCISE 6--------------------\n")

function isThisAnEmail(string) {
    let check = /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/;
    return check.test(string);
}

console.log(isThisAnEmail("ben.mcmahon@live.co.uk"))
console.log(isThisAnEmail("ben.mcmahonATlive.co.uk"))
console.log(isThisAnEmail("07801472949"))
console.log(isThisAnEmail("false@false"))
console.log(isThisAnEmail("true@true.co.uk"))
console.log(isThisAnEmail("ben.mcmahon@hotmail.fr"))

// const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
// /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

console.log("\n--------------------EXCERCISE 7--------------------\n")

function whatDayIsIt() {
    let dayOfTheYear = new Date();
    if (dayOfTheYear.getDay() === 5) {return "Friday";} 
    else if (dayOfTheYear.getDay()===6) {return "Saturday";}
    else if (dayOfTheYear.getDay()==0) {return "Sunday";}
    else if (dayOfTheYear.getDay()===1) {return "Monday";}
    else if (dayOfTheYear.getDay()===2) {return "Tuesday";}
    else if (dayOfTheYear.getDay()===3) {return "Wednesday";}
    else if (dayOfTheYear.getDay()===4) {return "Thursday";}
}

console.log(whatDayIsIt())
console.log(Date())


/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/

console.log("\n--------------------EXCERCISE 8--------------------\n")

// function rollTheDices(number){ }


/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

console.log("\n--------------------EXCERCISE 9--------------------\n")

var date1 = new Date("01/01/2022");
var date2 = new Date("10/11/2022");

var TimeDifference = date2.getTime() - date1.getTime();
var howManyDays = TimeDifference / (1000 * 3600 * 24);

console.log("Total number of days passed <br>"
+ date1 + "<br> and <br>"
+ date2 + " is: <br> "
+ howManyDays);

// need to put this in a function
// make exact number not a float

/*function howManyDays(string) {
  if {} }
*/

// datedif function

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/

console.log("\n--------------------EXCERCISE 10--------------------\n")



// if today (date) === 10/08/xxxx return true
// else return false

