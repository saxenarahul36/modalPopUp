function userService() {
    this.myfun = function(){
      return [ {
     name:'rahul',
     id:101}
     ,
     {name:'anmol',
     id:102},
     {name:'suchit',
     id:103} ,
     {name:'himanshu',
     id:104 },
     {name:'anuj S',
     id:105
      }];
    }
  };
  
  angular
    .module('app')
    .service('userService', userService);