let myBooks = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function updateLocalStorage() {
  localStorage.myBooks = JSON.stringify(myBooks);
  getBooks();
}

function destroyBook(id) {
  myBooks.splice(id, 1);
  updateLocalStorage();
}

function newBook(e) {
  e.preventDefault();
  title = document.getElementById("title");
  author = document.getElementById("author");
  myBooks.push(new Book(title.value, author.value));
  updateLocalStorage();
  title.value = "";
  author.value = "";
}
const form = document.getElementById("form");
form.addEventListener("submit", newBook);

function getBooks() {
  myBooks = JSON.parse(localStorage.myBooks);
  books = document.getElementById("books");
  books.innerHTML = "";
  let id = 0;
  for (book of myBooks) {
  books.innerHTML += `
  <li>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button onClick="destroyBook(${id++})">Remove</button>
  </li>`;
  }
}
if (localStorage.length > 0) getBooks();