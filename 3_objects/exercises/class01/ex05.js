// 05. Create a book object with the following properties: title, author, publication year, genre, publication age. Then change the genre of the book to "Adventure".

const currentYear = new Date().getFullYear();

const book = {
    title: 'Everything I Know About Love',
    author: 'Dolly Alderton',
    publicationYear: 2018,
    genre: 'humour',
    rating: null
}

book.publicationAge = currentYear - book.publicationYear;

book.genre = 'Adventure';

const bookDetails = `The book ${book['title']}, belonging to the ${book['genre']} genre, was written by ${book['author']} and published in ${book['publicationYear']}, ${book['publicationAge']} years ago`;

console.log(bookDetails);