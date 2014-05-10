var myApp = angular.module('myApp',[]);
myApp.factory('UserService', function() {
  var userService = {};

  userService.name = "Hello, Darling";

  userService.ChangeName = function (value) {

      userService.name = value;
  };

return userService;
});

function MyCtrl($scope, UserService) {
    $scope.name = UserService.name;
    $scope.updatedname="";
    $scope.changeName=function(data){
        $scope.updateServiceName(data);
    }
    $scope.updateServiceName = function(name){
      UserService.ChangeName(name);
      $scope.name = UserService.name;
    }
}
