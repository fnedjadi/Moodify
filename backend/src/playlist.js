const request = require('request');
const fs = require('fs');
const utils = require('./utils')

module.exports = {

    generate: function (req, res) {
        utils.getUserTopArtists(req, res, function(req, res, error, body) {
            let artists_uris = body.items.map(x => x.uri.replace('spotify:artist:', ''));
            utils.getUserRecommandations(req, res, artists_uris, 'sad', function(req, res, error, body) {
                const tracks = body.tracks.map(x => { 
                    return {
                        track_uri: x.uri,
                        name: x.name,
                        artist: x.artists[0].name,
                        album: x.album.name,
                        duration: x.duration_ms
                    }
                });

                res.status(200);
                res.send(tracks);
            })
        })
    },

    submit: function (req, res) {
        res.status(200);
        res.send('Playlist created.');
    },

    debug: function (req, res) {

        utils.getUserData(req, res, function(req, res, error, body) {
            const user_id = body.id;

            utils.createPlaylist(req, res, user_id, function(req, res, error, body){
                const playlist_id = body.id;
                
                utils.addTrack(req, res, user_id, playlist_id, function(req, res, error, body)  {
                    res.send(user_id + ' -- ' + playlist_id);
                })
            });
        })
    }
}