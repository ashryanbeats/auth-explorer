app.controller('HomeController', function($scope, $rootScope, $http) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.register = function (credentials) {
    $http.post('/api/user/register', credentials).then(function(user) {
      console.log("user created!");
    });
  };

  $scope.logout = function() {
    $http.get('/api/user/logout');
  };

  $scope.msgFromScope = "...And I'm a message from the HomeController scope, just so you know that I work!";

});