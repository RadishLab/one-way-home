document.addEventListener("DOMContentLoaded", function () {
  // Create a popcorn instance by calling Popcorn("#id-of-my-video")
  var pop = Popcorn("#flag-waving");

  // add a footnote at 2 seconds, and remove it at 6 seconds
  pop.footnote({
   start: 2,
   end: 6,
   text: "What is your name?",
   target: "caption",
   effect: "applyclass",


  });

  // play the video right away
  pop.autoplay("true");
}, false);

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

