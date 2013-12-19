MovieDB.App.directive('rating', function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var $star = $('<span class="icon icon-star"></span>');
            var rating = Math.round(scope.movie.rating);
            for(var i = 0; i < rating; i++) {
                element.append($star.clone());
            }
        }
    };
});