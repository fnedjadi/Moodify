const request = require('request');
const fs = require('fs');
const utils = require('./utils')

module.exports = {
    get: function (req, res) {

        let moodFile = fs.readFileSync('./src/moods.json');
        let moodJSON = JSON.parse(moodFile);
        res.status(200);
        res.send(moodJSON.moods);
    },


    playlist: function (req, res) {

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