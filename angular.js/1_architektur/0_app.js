MovieDB.App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: MovieDB.Config.templateUrl + 'movies.html',
            controller: 'MoviesController'
        }).
        otherwise({redirectTo: '/'});
}]);

MovieDB.App.run([function () {
    // initialise the app
}]);