/* global juke */

juke.controller('ArtistSongsCtrl', function($scope, songs, PlayerFactory){
    $scope.songs = songs;

    $scope.isPlaying = function(song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
    };
    $scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
    };
    $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };
})
;
