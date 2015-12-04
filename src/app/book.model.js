angular.module('app.books.model', [])
  .factory('BooksService', function () {
    var books = [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
      },
      {
        title: '1984',
        author: 'George Orwell',
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
      },
      {
        title: 'The Corrections',
        author: 'Jonathan Franzen',
      },
      {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
      },
      {
        title: 'The Road',
        author: 'Cormac McCarthy',
      },
      {
        title: 'Life of Pi',
        author: 'Yann Martel',
      },
      {
        title: 'Atonement',
        author: 'Ian McEwan',
      },
      {
        title: 'Gilead',
        author: 'Marilynne Robinson',
      },
      {
        title: 'Bel Canto',
        author: 'Ann Patchett',
      },
      {
        title: 'The Help',
        author: 'Kathryn Stockett',
      },
      {
        title: 'The Historian',
        author: 'Eliabeth Kostova',
      }
    ];

    var isSorted = {
      title: false,
      author: false
    };

    var sorts = {
      titleAscending: function(a, b) {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      },
      titleDescending: function(a, b) {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        } else {
          return 0;
        }
      },
      authorAscending: function(a, b) {
        if (a.author > b.author) {
          return 1;
        } else if (a.author < b.author) {
          return -1;
        } else {
          return 0;
        }
      },
      authorDescending: function(a, b) {
        if (a.author > b.author) {
          return -1;
        } else if (a.author < b.author) {
          return 1;
        } else {
          return 0;
        }
      }
    };

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
      if (!book.title) {
        alert('Please enter the title of the book.');
      } else if (!book.author) {
        alert('Please enter the author of the book.');
      } else if (isDup(book)) {
        alert('The book with the same title already exists in your collection. Please try again.');
      } else {
        books.push(book);
      }
    }

    function sortByTitle () {
      var cb = isSorted.title ? sorts.titleAscending : sorts.titleDescending;
      books = books.sort(cb);
      isSorted.title = !isSorted.title;
    }

    function sortByAuthor () {
      var cb = isSorted.author ? sorts.authorAscending : sorts.authorDescending;
      books = books.sort(cb);
      isSorted.author = !isSorted.author;
    }

    return {
      isDup: isDup,
      getBooks: getBooks,
      addBook: addBook,
      sortByTitle: sortByTitle,
      sortByAuthor: sortByAuthor
    };
  });
