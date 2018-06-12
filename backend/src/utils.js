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

    getUserTopArtists: function(req, res, callback) {
        const access_token = req.query.access_token;

        var options = {
            url: 'https://api.spotify.com/v1/me/top/artists?limit=5',
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
    },

    createPlaylist(req, res, user_id, callback)
    {
        const mood1 = req.query.mood1 || ""
        const access_token = req.query.access_token;

        // Creates the playlist
        let options = {
            url: 'https://api.spotify.com/v1/users/' + user_id + '/playlists',
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
                callback(req, res, error, body)                    
            } else {
                console.log('Error when creating playlist: ' + response ? response.statusCode : '');
                res.send(!!error ? error : response)
            }
        });
    },

    addTrack(req, res, user_id, playlist_id, tracks_uris, callback)
    {
        const access_token = req.query.access_token;
        let options = {
            url: 'https://api.spotify.com/v1/users/' + user_id + '/playlists/' + playlist_id + '/tracks',
            body: {
                "uris": tracks_uris
            },
            headers: {
                    'Authorization': 'Bearer ' + access_token,
                    'Content-Type': 'application/json'
            },
            json: true
        };

        request.post(options, function (error, response, body) {
            if (!error && response && (response.statusCode === 200 || response.statusCode === 201)) {
                callback(req, res, error, body)                    
            } else {
                console.log('Error when creating playlist: ' + response ? response.statusCode : '');
                res.send(!!error ? error : response)
            }
        });
    },

    getUserRecommandations(req, res, artists_uris, target, callback) {
        const access_token = req.query.access_token;

        console.log(target);
        let url = 'https://api.spotify.com/v1/recommendations?seed_artists=' + artists_uris[0];

        for (let feature in target) {
            url += '&' + feature + '=' + target[feature];
        }
        console.log(url);

        var options = {
            url: url,
            headers: { 'Authorization': 'Bearer ' + access_token },
            json: true
        };

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
    },

    getTargetFeatures: function(asked_moods) {
        let target_result = {};
        asked_moods.forEach(mood => {
            for (let feature in mood.target) {
                if (!target_result[feature]) {
                    target_result[feature] = mood.target[feature];
                }
                else {
                    target_result[feature] = (target_result[feature] + mood.target[feature]) / 2;
                }
            }
        })

        //return asked_moods[0].target;
        return target_result;
    }
}