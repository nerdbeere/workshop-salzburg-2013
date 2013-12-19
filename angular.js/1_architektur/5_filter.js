MovieDB.App.filter('watched', function () {
    return function(watched) {
        if(watched === 0) return 'never';
        if(watched === 1) return 'just once';
        if(watched > 1) return watched + ' times';
    };
});