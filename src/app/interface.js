angular.module('app.interface', [])
  .controller('InterfaceCtrl', function (BooksService) {
    var interface = this;
    interface.welcomingMode = true;
    interface.addingMode = false;

    interface.submit = function () {
      BooksService.addBook({title:interface.title, author:interface.author});
      interface.title = '';
      interface.author = '';
      interface.addingMode = false;
      interface.welcomingMode = true;
    };
  });
