function AppController(){
  this.title = 'App Component';
}

angular
  .module('app')
  //.controller('AppController', AppController)
  .controller("AppController",  function (userService) {
      this.runTest =  userService.myfun();    
   });