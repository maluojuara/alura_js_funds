// 04. Create a book object with the following properties: title, author, publication year, genre, publication age. Then, add a new property called rating. This property should be initialized as null.

// At the end of the book.js file, add a rating to the object.

// If the rating property is null, assign the rating to the book object.

// Otherwise, print a message indicating that the book already has a rating.

const currentYear = new Date().getFullYear();

const book = {
    title: 'Everything I Know About Love',
    author: 'Dolly Alderton',
    publicationYear: 2018,
    genre: 'humour',
    rating: null
}

book.publicationAge = currentYear - book.publicationYear;


const newRating = 'This book is amazing!';

if (book.rating === null) {
    book.rating = newRating;
}
else {
    console.log("This book already has a rating.");
}

// show details from the book

const bookDetails = `The book ${book['title']}, belonging to the ${book['genre']} genre, was written by ${book['author']} and published in ${book['publicationYear']}, ${book['publicationAge']} years ago`;

console.log(bookDetails);
console.log(`The rating of this book is: ${book.rating}`);