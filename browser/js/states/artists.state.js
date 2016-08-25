/* global juke */
juke.config(function ($stateProvider){
    $stateProvider.state('artistList', {
        url: '/artists',
        templateUrl: '/templates/allArtists.html',
        resolve: {
            artists: function(ArtistFactory) {
                return ArtistFactory.fetchAll()
            }
        },
        controller: 'ArtistsCtrl'
    })
})