app.controller('LoginController', function($scope, $rootScope, $http, $state) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function (credentials) {
    $http.post('/api/user/login', credentials).then(function(data) {
      console.log("user logged in!");
      console.log(data);
      
      $state.go('home');
    });
  };

});