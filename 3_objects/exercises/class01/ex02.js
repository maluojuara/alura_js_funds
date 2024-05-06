// 02. Create a new variable called currentYear and assign to it the current year (use new Date().getFullYear()). Create an object called book with the following properties: title, author, publication year, and genre.

// Add the property publicationAge directly to the book object, representing how many years ago the book was published. Calculate this age by subtracting the publicationYear from the currentYear.

// Create a string called showDetails containing the details of the book, including the publication age information.

// Display the showDetails string in the console to verify if the information, including the publication age, is displayed correctly.

const currentYear = new Date().getFullYear();

const book = {
    title: 'Everything I Know About Love',
    author: 'Dolly Alderton',
    publicationYear: 2018,
    genre: 'humour'
}

book.publicationAge = currentYear - book.publicationYear;

const bookDetails = `The book ${book.title}, belonging to the ${book.genre} genre, was written by ${book.author} and published in ${book.publicationYear}, ${book.publicationAge} years ago`;

console.log(bookDetails);
