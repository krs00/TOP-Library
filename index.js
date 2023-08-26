// GET NECESSARY DOM NODES
const newBookForm = document.getElementById('book-form')

newBookForm.addEventListener('submit', handleFormSubmit)

const myLibrary = [] // Empty array, holds all of the book objects'
// Global variable for keeping track of book ID's
let bookId = 0 

function handleFormSubmit(e) { 
  e.preventDefault(); // stops default behavior of form

  // catch form input values
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById('read').checked

  // create new book instance with form input values
  const newBook = new Book(title, author, pages, isRead) 

  // add new instance of book to myLibrary array
  setBookId(newBook) 
  addBookToLibrary(newBook)
  addBookToDisplay()
  updateBookId()
  console.log(myLibrary) 

}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  // function will toggle read status on individual instance of book
  this.toggleRead = function() {
    this.isRead = !this.isRead 
  } 
}

function setBookId(bookObj) {
  bookObj.id = bookId
}

function updateBookId() {
  bookId ++;
}


function addBookToLibrary(book) {
  myLibrary.push(book) 
}


function addBookToDisplay() {
  const div = document.createElement('div')
  div.setAttribute('data-index', bookId )
  div.classList.add('book-div')
  const delBtn = document.createElement('button')
  delBtn.textContent = 'Delete'

  const readBtn = document.createElement('button')
  readStatusBtn.textContent = 'Read' 

  div.appendChild(delBtn)
  div.appendChild(readBtn) 

  delBtn.addEventListener('click', removeBook) 

  document.body.appendChild(div) 
  
}

function removeBook() {
  let currentId = parseInt(this.parentElement.getAttribute("data-index"))
  
  const currentObj = myLibrary.findIndex(book => book.id === currentId)

  myLibrary.splice(currentObj, 1 )
  
  this.parentElement.remove();

}



// for testing purposes
document.body.addEventListener('click', () => console.log(myLibrary))