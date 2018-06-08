const utils = require('./utils');
const querystring = require('querystring');
const request = require('request');

const CLIENT_ID = '6a37cf1e18fd4b2495b1ebd805e02b9d'; // Your client id
const CLIENT_SECRET = '1f744596799f4f97a82a9dbf8d1b809c'; // Your secret
const REDIRECT_URI = 'http://localhost:8080/callback'; // Your redirect uri
const STATE_KEY = 'spotify_auth_state';
const ACCESS_TOKEN_KEY = 'spotify_access_token';
const AUTH_SCOPES = 'user-read-private user-read-email';


module.exports = {
    login: function (req, res) {
        const state = utils.generateRandomString(16);

        res.cookie(STATE_KEY, state);

        res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: CLIENT_ID,
                scope: AUTH_SCOPES,
                redirect_uri: REDIRECT_URI,
                state: state
            }));
    },

    logout: function (req, res) {

    },

    authCallback: function (req, res) {
        // your application requests refresh and access tokens
        // after checking the state parameter
        var code = req.query.code || null;
        var state = req.query.state || null;
        var storedState = req.cookies ? req.cookies[STATE_KEY] : null;

        if (state === null || state !== storedState) {
            res.redirect('/#' +
                querystring.stringify({
                    error: 'state_mismatch'
                }));
        } else {
            res.clearCookie(STATE_KEY);
            var authOptions = {
                url: 'https://accounts.spotify.com/api/token',
                form: {
                    code: code,
                    redirect_uri: REDIRECT_URI,
                    grant_type: 'authorization_code'
                },
                headers: {
                    'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
                },
                json: true
            };

            request.post(authOptions, function (error, response, body) {
                if (!error && response.statusCode === 200) {

                    var access_token = body.access_token,
                        refresh_token = body.refresh_token;

                    res.cookie(ACCESS_TOKEN_KEY, access_token);

                    var options = {
                        url: 'https://api.spotify.com/v1/me',
                        headers: { 'Authorization': 'Bearer ' + access_token },
                        json: true
                    };

                    // use the access token to access the Spotify Web API
                    request.get(options, function (error, response, body) {
                        console.log(body);
                    });

                    // we can also pass the token to the browser to make requests from there
                    res.redirect('http://localhost:3000/faq');
                } else {
                    res.redirect('/#' +
                        querystring.stringify({
                            error: 'invalid_token'
                        }));
                }
            });
        }
    },

    userInfo: function (req, res) {

        console.log("cookies: " + JSON.stringify(req.cookies));

        const access_token = req.cookies ? req.cookies[ACCESS_TOKEN_KEY] : null;

        if (!!access_token) {
            var options = {
                url: 'https://api.spotify.com/v1/me',
                headers: { 'Authorization': 'Bearer ' + access_token },
                json: true
            };
    
            // use the access token to access the Spotify Web API
            request.get(options, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    res.send(body);
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