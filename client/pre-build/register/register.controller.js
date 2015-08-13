app.controller('RegisterController', function($scope, $rootScope, $http, $state) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.register = function (credentials) {
    $http.post('/api/user/register', credentials).then(function(data) {
      console.log(data);
      if (data.status === 200) {
        console.log("User created!");

        $state.go('home');
      }
    });
  };

});