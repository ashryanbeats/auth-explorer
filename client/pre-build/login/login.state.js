app.config(function ($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: '/pre-build/login/login.html',
        controller: 'LoginController'
    });
});