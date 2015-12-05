angular.module('app.interface', [])
  .controller('InterfaceCtrl', function (BooksService) {
    var interface = this;
    interface.welcomingMode = true;
    interface.addingMode = false;

    interface.submit = function () {
      BooksService.addBook({title:interface.title, author:interface.author, rating: 0});
      interface.title = '';
      interface.author = '';
      interface.addingMode = false;
      interface.welcomingMode = true;
    };

    interface.sortByTitle = function () {
      BooksService.sortByTitle();
    };

    interface.sortByAuthor = function () {
      BooksService.sortByAuthor();
    };

    interface.sortByRating = function () {
      BooksService.sortByRating();
    };
  });
