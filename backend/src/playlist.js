const request = require('request');
const fs = require('fs');
const utils = require('./utils')

module.exports = {

    generate: function (req, res) {
        let data = {
            "tracks": [
                {
                    "name": "Bad Romance",
                    "artist": "Lady Gaga",
                    "album": "The Fame Monster",
                    "duration": "4:55"
                },
                {
                    "name": "Here Comes the Sun - Remastered",
                    "artist": "The Beatles",
                    "album": "Abbey Road (Remastered)",
                    "duration": "3:06"
                }
            ]
        }
        res.status(200);
        res.send(data);
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