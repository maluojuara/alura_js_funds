// 02. Create an array of JavaScript objects representing movie information. Each object should contain at least the following properties:

// id (number): movie identifier.
// title (string): movie title.
// director (string): director's name.
// releaseYear (number): year of movie release.

const movieCatalog = [
    { id: 1, title: "Matrix", director: "Lana Wachowski", releaseYear: 1999 },
    { id: 2, title: "Jurassic Park", director: "Steven Spielberg", releaseYear: 1993 },
    { id: 3, title: "Inception", director: "Christopher Nolan", releaseYear: 2010 },
    {id: 4, title: "Girl, Interrupted", director: "James Mangold", releaseYear: 1999},
    {id: 5, title: "Eyes Wide Shut", director: "Stanley Kubrick", releaseYear: 1999}
]

// Create a function called filterMoviesByYear that takes a year as a parameter and returns a new array containing only the movies released in that year.

// Use the function to filter the movies released in a specific year and print the resulting array to the console. Then, repeat the operation with another year.

function filterMoviesByYear(year) {
    return movieCatalog.filter(movie => movie.releaseYear === year);
}

const movies1999 = filterMoviesByYear(1999);
console.log("these were the movies released in 1999:");
console.log(movies1999);