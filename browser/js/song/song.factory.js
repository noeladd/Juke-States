'use strict';

juke.factory('SongFactory', function ($http) {

  return {
    convert: function (song) {
      song.audioUrl = '/api/songs/' + song.id + '/audio';
      return song;
    },
    fetchByArtist: function (id) {
      return $http.get('/api/artists/' + id + '/songs')
      .then(function (response) {return response.data; })
    }
  };

});
