let books = [];
let book = {};

const addBookButton = document.getElementById('submitButton');
const booksList = document.getElementById('booksList');

addBookButton.addEventListener('click', addBook);

function addBook(title, author) {
  // let title = document.querySelector("#title").value;
  // let author = document.querySelector("#author").value;
  book = { title, author };
  books.push(book);
}

function removeBook(title, author) {
  books = books.filter((book) => book.title !== title && book.author !== author);
  return books;
}

addBook('title1', 'author1');
addBook('title2', 'author2');
addBook('title3', 'author3');
addBook('title4', 'author4');
addBook('title5', 'author5');

// removeBook('title4', 'author4');
function displayBooks() {
  books.forEach((book) => {
    booksList.innerHTML += '<li>'
    + `<h3>${book.title}</h3>`
    + `<p>${book.author}</p>`
    + '</li>';
    document.querySelector('.booksContainer').appendChild(booksList);
  });
}
displayBooks();

// Local Storage

function isLocalStorageAvailable() {
  try {
    const valueToStore = 'test';
    const mykey = 'key';
    localStorage.setItem(mykey, valueToStore);
    const recoveredValue = localStorage.getItem(mykey);
    localStorage.removeItem(mykey);

    return recoveredValue === valueToStore;
  } catch (e) {
    return false;
  }
}
const form = document.querySelector('#book-form');
const storeBooks = () => {
  if (isLocalStorageAvailable()) {
    localStorage.setItem('booksData', JSON.stringify(books));
  }
};