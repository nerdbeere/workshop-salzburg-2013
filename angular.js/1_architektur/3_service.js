MovieDB.App.factory('Movies', function($http, $rootScope) {
    var movies = [{
            name: 'Pulp Fiction',
            year: '1994',
            rating: 4.5,
            watched: 1
    }];
    return {
        getAll: function() {
            return movies;
        }
    };
});