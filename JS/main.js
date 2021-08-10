let myBooks = [];

function getBooks() {
  myBooks = JSON.parse(localStorage.myBooks);
  const books = document.getElementById('books');
  books.innerHTML = '';
  let id = 0;

  myBooks.forEach((book) => {
    books.innerHTML += '<li>'
    + `<h3>${book.title}</h3>`
    + `<p>${book.author}</p>`
    + `<button onClick="removeBook(${id})">Remove</button>`
    + '</li>';
    id += 1;
  });
}

function updateLocalStorage() {
  localStorage.myBooks = JSON.stringify(myBooks);
  getBooks();
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    myBooks.push(this);
    updateLocalStorage();
  }
}

const form = document.getElementById('form');

form.addEventListener('submit', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const bookToAdd = new Book(title.value, author.value);
  bookToAdd.addBook();
});

// eslint-disable-next-line no-unused-vars
function removeBook(id) {
  myBooks.splice(id, 1);
  updateLocalStorage();
}

if (localStorage.length > 0) getBooks();