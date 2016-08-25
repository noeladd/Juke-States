/* global juke */
juke.config(function ($stateProvider){
    $stateProvider.state('albumList', {
        url: '/albums',
        templateUrl: '/templates/allAlbums.html',
        resolve: {
            albums: function(AlbumFactory) {
                return AlbumFactory.fetchAll();
            }
        },
        controller:  'AlbumsCtrl'
    });
});
