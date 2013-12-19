MovieDB.App.controller('MoviesController', function($scope, Movies) {
    $scope.movies = Movies.getAll();
});