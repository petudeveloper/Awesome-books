const link = document.querySelectorAll('.nav-link');
const booksListSection = document.querySelector('#books-list');
const addBookSection = document.querySelector('#add-book-container');
const contactSection = document.querySelector('#contact');
const sections = [booksListSection, addBookSection, contactSection];

// for(let i=0; i< sections.length; i += 1)

    link[0].addEventListener('click', () => {
      
      sections[0].classList.remove('d-none');
      sections[1].classList.add('d-none');
      sections[2].classList.add('d-none');
    }); 

    link[1].addEventListener('click', () => {
      sections[1].classList.remove('d-none');
      sections[0].classList.add('d-none');
      sections[2].classList.add('d-none');
    }); 

    link[2].addEventListener('click', () => {
      sections[2].classList.remove('d-none');
      sections[0].classList.add('d-none');
      sections[1].classList.add('d-none');
    });
