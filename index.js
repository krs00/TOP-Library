// GET NECESSARY DOM NODES
const newBookForm = document.getElementById('book-form')

newBookForm.addEventListener('submit', handleFormSubmit)

const myLibrary = [] // Empty array, holds all of the book objects

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
  addBookToLibrary(newBook)
  addBookToDisplay() 
  console.log(newBook.title)
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

function addBookToLibrary(book) {
  myLibrary.push(book) 
}

// finds the necessary index of last book added to library array
// this is number is used to associate to the respective DOM element when it gets created
function findLastIndex() {
  return myLibrary.length - 1;
}


function addBookToDisplay() {
  const dataNum = findLastIndex()
  const div = document.createElement('div')
  div.setAttribute('data-index', dataNum )
  div.classList.add('book-div')

  document.body.appendChild(div) 
  
}