// GET NECESSARY DOM NODES
bookForm = document.getElementById("book-form")

bookForm.addEventListener("submit", handleFormSubmit) 

function handleFormSubmit(e) {
  e.preventDefault();
  
}



const myLibrary = []; // Holds all added books

// object constructor
function Book(title, author, year, isRead = false) {
  this.title = title;
  this.author = author;
  this.year = year; 
  this.isRead = isRead;

  this.readBook = function () {
    this.isRead = true; 
  };

  this.unReadBook = function () {
    this.isRead = false; 
  }; 

  this.info = function () {
    return { title, author, pages, isRead };
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks()
}
 

function displayBooks() {
  
  for (let i = 0; i < myLibrary.length; i++) {
    
    const div = document.createElement('div')
    div.style.backgroundColor = 'black'
    div.style.height = '100px' 
    div.style.width = '100px'

    document.body.appendChild(div) 
  }
}
