// Object
// Create a Library object:
// The object should have a property books that holds an array of book objects.
// Define methods on the Library object:
// addBook(book): Adds a new book object to the books array.+++
// checkAvailability(title): Checks if a book with the given title is available+++
// borrowBook(title): Changes the isAvailable status of the book to false if the book is available.+++
// returnBook(title): Changes the isAvailable status of the book to true.+++
// listAvailableBooks(): Lists all books with isAvailable set to true.+++

class Book{
  constructor(title,author,isAvailable){
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
}
class Library{
  constructor() {
    this.books = []; 
  }

  addBook(book){
    this.books.push(book);
  }

  checkAvailability(title){
    const book = this.books.find(book=>book.title===title);
    if(book===undefined){
      return `The book with title ${title} not found in library`;
    }
    else{
      if(book.isAvailable===true){
        return `The book with title ${title} is available in library`;
      } else{
        return `The book with title ${title} is not available in library`;
      }
    }
  }

  borrowBook(title){
    const book = this.books.find(book=>book.title===title);
    if(book===undefined || book.isAvailable===false){
      return `You cannot borrow book with the title of '${title}'`;
    } else{
      book.isAvailable=false;
      return `You succeffully borrowed the book with the title '${title}'`;
    }
  }

  returnBook(title){
    const book = this.books.find(book=>book.title===title);
    if(book===undefined || book.isAvailable===true){
      return `You cannot return book with the title of '${title}'`;
    } else{
      book.isAvailable=true;
      return `You successfully returned the book with the title of '${title}'`;
    }
  }

  listAvailableBooks(){
    return this.books.filter(book=>book.isAvailable===true);
  }
}

const book1 = new Book('The Heart is a Lonely Hunter','Carson McCullers',true);
const book2 = new Book('The devil wears prada','Lauren Weisberger',false);
const book3 = new Book('The name jar','Xangsook Choi',true);
const library = new Library();
//---------------------------------------------------------------------------------------------
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// console.log('Books',library.books); //will give all three book objects you add inside an array
// console.log('available check(first book):',library.checkAvailability('The Heart is a Lonely Hunter')); //is available
// console.log('available check(first book):',library.checkAvailability('Mürekkebe boyanan sardunya')); //not found in library
// console.log('available check(first book):',library.checkAvailability('The devil wears prada')); //is not available
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// console.log(library.borrowBook(book1.title)); //successfully borrowed
// console.log(library.books); //checking if isAvailable property of borrowed book changed to false
// console.log(library.borrowBook('hii')); //you cannot borrow
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// console.log(library.returnBook('The Heart is a Lonely Hunter','Carson McCullers')); //successfully returned
// console.log(library.books); //checking if isAvailable property of borrowed book changed to true
// console.log(library.returnBook('ehehhe')); //cannot return
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// console.log(library.listAvailableBooks()); //list books with isAvailable set to true
//---------------------------------------------------------------------------------------------