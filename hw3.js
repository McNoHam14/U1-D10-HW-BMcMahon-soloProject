const movies = [

    {

    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

    ];


// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/

console.log("\n--------------------EXCERCISE 11--------------------\n")

let egObject = {
    name: "Mercedes",
    color: "Red",
    licensePlate: "CA10 DAL",
    price: 15000,
    GPS: true,
}

console.log(egObject)


function deleteProp(object, string) {
    delete object[string];
    return object;
}

console.log(deleteProp(egObject,"licensePlate"));

//object = Car spec
//string to delete = license plate


/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/

console.log("\n--------------------EXCERCISE 12--------------------\n")

function oldestMovie() {
    let oldest=movies[0].Year;
    let oldestMovie="";
    for (i=1; i<movies.length; i++) {
        if (movies[i].Year<oldest) {
            oldest = movies[i].Year;
            oldestMovie = movies[i].Title;
        }
    }
    return oldestMovie;
}

console.log(oldestMovie());

/*
{

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    }
*/

// function oldestMovie
// compare release Date to integers
// first one oldest then iterate over the rest
// return oldest


/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

console.log("\n--------------------EXCERCISE 13--------------------\n")

function countMovies() {
    let counter = 0;
    for (i=0; i<movies.length;i++) {
        counter++;
    }
    return counter;
}

console.log(countMovies());

// length()
// if loop through count a variable eg type: "Movie" string

/*
let counter = 0
for (let i = 0; i < movies.length; i++) {
    if  (movies[i].length === "0") counter++;
    return counter;
}

console.log(counter)

*/

// tried this way first, didn't work


/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/

console.log("\n--------------------EXCERCISE 14--------------------\n")

function onlyTheTitles() {
    let moviesArray = [];
    for (i=0; i < movies.length; i++) {
        moviesArray.push(movies[i].Title);
    }
    return moviesArray;
}

console.log(onlyTheTitles());

/*
{

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    }
*/

// Array.from

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

console.log("\n--------------------EXCERCISE 15--------------------\n")

function onlyInThisMillenium() {
    let moviesArray=[];
    for (i=0; i<movies.length; i++) {
        if(parseInt(movies[i].Year)>=2000){
        moviesArray.push(movies[i].Title);
    }
} return moviesArray;
}

console.log(onlyInThisMillenium())

// parseint 2000 and above
// for loop through array
// push array movies title


/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

console.log("\n--------------------EXCERCISE 16--------------------\n")

function getMovieById(array, id) {
    for (let i =0; i<movies.length; i++) {
        if (movies[i].imdbID === id) {
            return movies[i].Title;
        }
    }
    return "not an id"
}

console.log(getMovieById("tt4154796"))


/*
{

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    }
*/


/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

console.log("\n--------------------EXCERCISE 17--------------------\n")


function sumAllTheYears (){
let total = 0;
for (let i = 0; i, i<movies.length; i++) {
    total += parseInt(movies[i].Year);
}
return total;
}

console.log(sumAllTheYears())

// array called years
// length of the movies
// parse int
// for loop


/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

console.log("\n--------------------EXCERCISE 18--------------------\n")


function searchByTitle(string) {
    let moviesArray = [];
    for (i=0; i<movies.length; i++) {
        if (movies[i].Title.toLowerCase().includes(string.toLowerCase())) {
            moviesArray.push(movies[i].Title);
        }
    }
    return moviesArray
}

console.log(searchByTitle("Aveng"))


/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

console.log("\n--------------------EXCERCISE 19--------------------\n")



/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

console.log("\n--------------------EXCERCISE 20--------------------\n")


