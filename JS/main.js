let books = [];
let book = {};

const addBookButton = document.getElementById('submitButton');

addBookButton.addEventListener('click', addBook)

function addBook(title, author){
  // let title = document.querySelector("#title").value;
  // let author = document.querySelector("#author").value;
  book = {title, author};
  books.push(book);
}

function removeBook(title, author){
  books = books.filter(book => book.title != title && book.author != author)
  return books
}