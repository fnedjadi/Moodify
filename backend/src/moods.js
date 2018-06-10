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
        const mood1 = req.query.mood1
        const access_token = req.query.access_token;
        utils.getUserData(req, res, function(req, res, error, data) {
            let options = {
                url: 'https://api.spotify.com/v1/users/' + data.id + '/playlists',
                body: {
                    "name": "Moodify First Playlist"
                },
                headers: {
                     'Authorization': 'Bearer ' + access_token,
                     'Content-Type': 'application/json'
                },
                json: true
            };

            request.post(options, function (error, response, body) {
                if (!error && response && response.statusCode === 200) {
                    res.status(200);
                    res.send(body);
                } else {
                   //console.log('Error when creating playlist: ' + response ? response.statusCode : '');
                   //console.log(response);
                   res.send('error');
                }
            });
        })

    }

}