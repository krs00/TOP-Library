function Book(title, author, year, pages, read) {
  this.title = title 
  this.author = author
  this.year = year
  this.pages = pages
  this.read = read

  this.readBook = function() {
    this.read = true
  }

  this.info = function() {
    return title
  }
}

const kymaniBook = new Book('kymanibook', 'kymani', 2000, 79, false)

console.log(kymaniBook.info())