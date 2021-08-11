/* eslint-disable no-unused-vars */

class ListOfBooks {
  constructor() {
    if (localStorage.myBooks != null) {
      this.books = JSON.parse(localStorage.myBooks);
    } else {
      this.books = [];
    }
  }

  newBook() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    this.books.push({ title: title.value, author: author.value });
    this.updateLocalStorage();
  }

  removeBook(id) {
    this.books.splice(id, 1);
    this.updateLocalStorage();
  }

  showBooks() {
    const books = document.getElementById('books');
    books.innerHTML = '';
    let id = 0;

    this.books.forEach((book) => {
      books.innerHTML += `
      <li>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button onClick="myBooks.removeBook(${id})">Remove</button>
      </li>`;
      id += 1;
    });
  }

  updateLocalStorage() {
    localStorage.myBooks = JSON.stringify(this.books);
    this.showBooks();
  }
}

const myBooks = new ListOfBooks();

myBooks.showBooks();