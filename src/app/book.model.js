angular.module('app.books.model', [])
  .factory('BooksService', function () {
    var books = [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald'
      },
      {
        title: '1984',
        author: 'George Orwell'
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee'
      }
    ];

    function isDup (book) {
      for (var i = 0; i < books.length; i++) {
        if (books[i].title.toUpperCase() === book.title.toUpperCase()) {
          return true;
        }
      }
      return false;
    }

    function getBooks () {
      return books;
    }

    function addBook (book) {
      if (isDup(book)) {
        alert('The book with the same title already exists in your collection. Please try again.');
      } else if (!book.title) {
        alert('Please enter the title of the book.');
      } else if (!book.author) {
        alert('Please enter the author of the book.');
      } else {
        books.push(book);
      }
    }

    return {
      isDup: isDup,
      getBooks: getBooks,
      addBook: addBook
    };
  });
