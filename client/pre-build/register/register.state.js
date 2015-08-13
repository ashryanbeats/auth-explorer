app.config(function ($stateProvider) {
    $stateProvider.state('register', {
        url: '/register',
        templateUrl: '/pre-build/register/register.html',
        controller: 'RegisterController'
    });
});