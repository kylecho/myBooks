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

    function isDup () {

    }

    function getBooks () {
      return books;
    }

    function addBook () {

    }

    return {
      isDup: isDup,
      getBooks: getBooks,
      addBook: addBook
    };
  });
