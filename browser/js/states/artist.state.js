/* global juke */
juke.config(function ($stateProvider){
    $stateProvider
    .state('artist', {
        url: '/artist/:id',
        templateUrl: '/templates/artist.html',
        resolve: {
            artist: function(ArtistFactory, $stateParams) {
                return ArtistFactory.fetchById($stateParams.id);
            }
        },
        controller: 'ArtistCtrl'
    })
    .state('artist.albums', {
        url: '/albums',
        templateUrl: '/templates/allAlbums.html',
        resolve: {
            albums: function(AlbumFactory, $stateParams) {
                return AlbumFactory.fetchByArtist($stateParams.id);
            }
        },
        controller: "ArtistAlbumsCtrl"
    })
    .state('artist.songs', {
        url: '/songs',
        templateUrl: 'templates/songs.html',
        resolve: {
            songs: function(SongFactory, $stateParams){
                return SongFactory.fetchByArtist($stateParams.id)
            }
        },
        controller: "ArtistSongsCtrl"
    })
});