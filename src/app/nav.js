angular.module('app.nav', [])
  .controller('NavCtrl', function (BooksService) {
    var nav = this;

    nav.getNavbarBooks = function () {
      return BooksService.getBooks().slice(0, 3);
    };
  });
