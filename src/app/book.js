angular.module('app.book', [])
  .controller('BookCtrl', function (BooksService) {
    var book = this;

    book.getBooks = function () {
      return BooksService.getBooks();
    };

  });
