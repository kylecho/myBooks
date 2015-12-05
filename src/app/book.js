angular.module('app.book', [])
  .controller('BookCtrl', function ($scope, BooksService) {
    var book = this;

    book.getBooks = function () {
      return BooksService.getBooks();
    };

    book.saveRating = function (book, rating) {
      BooksService.saveRating(book, rating);
    };
  });
