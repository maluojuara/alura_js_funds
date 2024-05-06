// 03. Create a book object with the following properties: title, author, publication year, genre, publication age. Then, use square brackets to directly access the properties of the book object and print the book details to the console.

const currentYear = new Date().getFullYear();

const book = {
    title: 'Everything I Know About Love',
    author: 'Dolly Alderton',
    publicationYear: 2018,
    genre: 'humour'
}

book.publicationAge = currentYear - book.publicationYear;

const bookDetails = `The book ${book['title']}, belonging to the ${book['genre']} genre, was written by ${book['author']} and published in ${book['publicationYear']}, ${book['publicationAge']} years ago`;

console.log(bookDetails);