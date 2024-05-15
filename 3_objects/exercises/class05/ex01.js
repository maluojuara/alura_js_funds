// 01. Create an array of JavaScript objects representing book information. Each object should contain at least the following properties:
// id (number): book identifier.
// title (string): book title.
// author (string): author's name.
// publicationYear (number): year of book publication.


const library = [
    { id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien", publicationYear: 1954 },
    { id: 2, title: "Don Quixote", author: "Miguel de Cervantes", publicationYear: 1605 },
    { id: 3, title: "1984", author: "George Orwell", publicationYear: 1949 }
]

// Create a function called `findBookById` that takes the book ID as a parameter and returns the corresponding book object. If no book is found, the function should return null.

// Use the function to find a book with an existing ID and print the information of the found book on the console. Then, use the function to find a book with a nonexistent ID and print a message on the console indicating that the book was not found.


function findBookById (id) {
    for (const element of library) {
        if (element.id === id) 
            return element;
    }
    return null; // Retorne null fora do loop caso nenhum livro seja encontrado
}

// const idToFind = 5;
const idToFind = 1;

const bookFound = findBookById(idToFind);

bookFound ? console.log(bookFound) : console.log('there is no book with that id');