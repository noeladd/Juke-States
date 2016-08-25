/* global juke */
juke.config(function ($stateProvider){
    $stateProvider.state('album', {
        url: '/album/:id',
        templateUrl: '/templates/album.html',
        resolve: {
            album: function(AlbumFactory, $stateParams) {
               return AlbumFactory.fetchById($stateParams.id);
            }
        },
        controller: 'AlbumCtrl'
    });
})
;
