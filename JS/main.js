let books = [];
let book = {};

const addBookButton = document.getElementById('submitButton');
const booksList = document.getElementById('booksList');

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

addBook("title1", "author1")
addBook("title2", "author2")
addBook("title3", "author3")

books.forEach( book => {
  let li = document.createElement('li');
  booksList.appendChild(li);
  li.textContent = book.title + book.author;
})