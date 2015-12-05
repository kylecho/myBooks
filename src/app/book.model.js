angular.module('app.books.model', [])
  .factory('BooksService', function () {
    var books = [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        rating: 3
      },
      {
        title: '1984',
        author: 'George Orwell',
        rating: 4
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        rating: 5
      },
      {
        title: 'The Corrections',
        author: 'Jonathan Franzen',
        rating: 0
      },
      {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        rating: 0
      },
      {
        title: 'The Road',
        author: 'Cormac McCarthy',
        rating: 0
      },
      {
        title: 'Life of Pi',
        author: 'Yann Martel',
        rating: 0
      },
      {
        title: 'Atonement',
        author: 'Ian McEwan',
        rating: 0
      },
      {
        title: 'Gilead',
        author: 'Marilynne Robinson',
        rating: 0
      },
      {
        title: 'Bel Canto',
        author: 'Ann Patchett',
        rating: 0
      },
      {
        title: 'The Help',
        author: 'Kathryn Stockett',
        rating: 0
      },
      {
        title: 'The Historian',
        author: 'Eliabeth Kostova',
        rating: 0
      }
    ];

    var isSorted = {
      title: false,
      author: false,
      rating: false,
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
      },
      ratingAscending: function(a, b) {
        return a.rating - b.rating;
      },
      ratingDescending: function(a, b) {
        return b.rating - a.rating;
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
        console.log('A book with a title, "' + book.title + '" by ' + book.author + ' has been successfully registered.');
        console.dir(books);
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

    function sortByRating () {
      var cb = isSorted.rating ? sorts.ratingAscending : sorts.ratingDescending;
      books = books.sort(cb);
      isSorted.rating = !isSorted.rating;
    }

    function saveRating (book, rating) {
      for (var i = 0; i < books.length; i++) {
        if (books[i].title.toUpperCase() === book.title.toUpperCase()) {
          books[i].rating = rating;
          console.log('Rating saved for the book with a title, "' + books[i].title + '" with ' + books[i].rating + ' stars.');
          console.dir(books);
        }
      }
    }

    return {
      isDup: isDup,
      getBooks: getBooks,
      addBook: addBook,
      sortByTitle: sortByTitle,
      sortByAuthor: sortByAuthor,
      sortByRating: sortByRating,
      saveRating: saveRating
    };
  });
