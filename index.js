// GET NECESSARY DOM NODES
bookForm = document.getElementById("book-form")

bookForm.addEventListener("submit", handleFormSubmit) 

function handleFormSubmit(e) {
  e.preventDefault(); 
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById('read').checked
  
  const newBook = new Book(title, author, pages, isRead)
  addBookToLibrary(newBook)
  createBookDiv(newBook.title, newBook.author, newBook.pages, newBook.isRead)
  console.log(myLibrary) 

}


const myLibrary = []; // Holds all books 

// object constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages 
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
  // displayBooks()
} 
 

// function displayBooks() {
  
//   for (let i = 0; i < myLibrary.length; i++) {
     
//     const div = document.createElement('div') 
//     div.style.backgroundColor = 'black'
//     div.style.height = '100px' 
//     div.style.width = '100px' 

//     document.body.appendChild(div) 
//   }
// }


function createBookDiv(title, author, pages, isRead) {

  const div = document.createElement('div')
  div.classList.add('book-div')

  document.body.appendChild(div) 

  const text = document.createElement('p')
  text.textContent = `${title}, ${author}, ${pages} ${isRead}`

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = "Delete book"
  div.appendChild(deleteBtn) 

  div.appendChild(text) 
}