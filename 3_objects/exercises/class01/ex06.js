// 06. Create a book object with the following properties: title, author, publication year, genre, publication age. Then, delete the rating property from the book object. After that, display the book details in the console, checking if the updated information, without the rating, is displayed correctly.

const currentYear = new Date().getFullYear();

const book = {
    title: 'Everything I Know About Love',
    author: 'Dolly Alderton',
    publicationYear: 2018,
    genre: 'humour',
    rating: 'This book is amazing!'
}

book.publicationAge = currentYear - book.publicationYear;

console.log(book);

delete book.rating;

console.log(book);