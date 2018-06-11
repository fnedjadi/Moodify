const request = require('request');

module.exports = {

    generateRandomString : function(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    },

    getUserData: function(req, res, callback) {
        const access_token = req.query.access_token
        if (!!access_token) {
            var options = {
                url: 'https://api.spotify.com/v1/me',
                headers: { 'Authorization': 'Bearer ' + access_token },
                json: true
            };
    
            // use the access token to access the Spotify Web API
            request.get(options, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    callback(req, res, error, body)
                }
                else if (!error) {
                    if (!!response.body)
                        res.send(response.body)
                    else
                        res.send(response);
                } else {
                    res.send(error);
                }
            })
        }
        else {
            res.status(401);
            res.send("User not logged in");
        }
    },


    createPlaylist(req, res, callback)
    {
        const mood1 = req.query.mood1
        const access_token = req.query.access_token;
        this.getUserData(req, res, function(req, res, error, data) {

            // Creates the playlist
            let options = {
                url: 'https://api.spotify.com/v1/users/' + data.id + '/playlists',
                body: {
                    "name": 'Moodify ' + mood1 + ' Playlist'
                },
                headers: {
                     'Authorization': 'Bearer ' + access_token,
                     'Content-Type': 'application/json'
                },
                json: true
            };
            request.post(options, function (error, response, body) {
                if (!error && response && (response.statusCode === 200 || response.statusCode === 201)) {
                    callback(req, res, error, response)                    
                } else {
                   console.log('Error when creating playlist: ' + response ? response.statusCode : '');
                   res.send(!!error ? error : response)
                }
            });
        })
    }

}