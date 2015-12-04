angular.module('app.interface', [])
  .controller('InterfaceCtrl', function (BooksService) {
    var interface = this;

    interface.submit = function () {
      BooksService.addBook({title:interface.title, author:interface.author});
      interface.title = '';
      interface.author = '';
    };
  });
