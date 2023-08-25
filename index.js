// GET NECESSARY DOM NODES
const newBookForm = document.getElementById('book-form')

newBookForm.addEventListener('submit', handleFormSubmit)

const myLibrary = [] // Empty array, holds all of the book objects

function handleFormSubmit(e) { 
  e.preventDefault(); // stops default behavior of form

  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById('read').checked

  const newBook = new Book(title, author, pages, isRead)

  addBookToLibrary(newBook)
  console.log(myLibrary) 

}

function Book(title, author, pages, isRead) {
  this.title = title; 
  this.author = author;
  this.pages = pages;
  this.isRead = isRead; 
}

function addBookToLibrary(book) {
  myLibrary.push(book) 
}