const request = require('request');
const fs = require('fs');
const utils = require('./utils')

module.exports = {
    get: function (req, res) {

        let mood_file = fs.readFileSync('./src/moodsData.json');
        let mood_json = JSON.parse(mood_file);
        res.status(200);
        res.send(mood_json.moods);
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