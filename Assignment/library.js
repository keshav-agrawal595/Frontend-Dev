class Book{
  constructor(title,author,isbn,isIssued=false){
    this.title=title
    this.author=author
    this.isbn=isbn
    this.isIssued=isIssued
  }
  issueBook(){
    if(!this.isIssued) this.isIssued=true
  }
  returnBook(){
    if(this.isIssued) this.isIssued=false
  }
}

const books=[
  new Book('1984','Orwell','ISBN001'),
  new Book('Clean Code','Martin','ISBN002'),
  new Book('You Don\'t Know JS','Katz','ISBN003',true),
  new Book('Eloquent JavaScript','Haverbeke','ISBN004')
]

function displayAvailableBooks(){
  books.filter(b=>!b.isIssued).forEach(b=>console.log(`${b.title} - ${b.isbn}`))
}

function issueBookByISBN(isbn){
  const book=books.find(b=>b.isbn===isbn)
  if(!book) return null
  if(book.isIssued) return false
  book.issueBook()
  return true
}
