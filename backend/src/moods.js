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
        utils.createPlaylist(req, res, function(req, res, error, response){
            const playlist_id = response.body.id;

            

            res.send(playlist_id);
        });
    }
}