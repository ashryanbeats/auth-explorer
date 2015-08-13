app.controller('NavbarController', function($scope, $http, $state) {

  $scope.logout = function() {
    $http.get('/api/user/logout').then(function(data){
      console.log(data);

      $state.go('home');
    });
  };

});