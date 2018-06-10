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
                    callback(req, res, body)
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
    }
}