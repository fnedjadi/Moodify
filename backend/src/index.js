const express = require('express');
const Spotify = require('spotify-web-api-node');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express()
const CLIENT_ID = '6a37cf1e18fd4b2495b1ebd805e02b9d'; // Your client id
const CLIENT_SECRET = '1f744596799f4f97a82a9dbf8d1b809c'; // Your secret
const REDIRECT_URI = 'http://localhost:8080/callback'; // Your redirect uri
const STATE_KEY = 'spotify_auth_state';

const AUTH_SCOPES = ['user-read-private', 'user-read-email'];

const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});

app.use(cookieParser());
app.use(cors());


app.get('/', function (req, res) {
  res.send('Moodify! <a href="/login">login</a>')
})

app.get('/ping', function(req, res) {
  res.send('pong');
})

app.listen(8080, function () {
  console.log('Moodify Backend - Listening on port 8080')
})


var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};


app.get('/login', (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(AUTH_SCOPES, state));
});

app.get('/userInfo', (req, res) => {
  spotifyApi.getMe()
  .then(function(data) {
    res.send(data);
  }, function(err) {
    console.log("Error getting user info: ", err);
  })
})

app.get('/callback', (req, res) => {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
  // state state validation
  if (state === null || state !== storedState) {
    res.redirect('/#/error/state mismatch');
  } else {
    spotifyApi.authorizationCodeGrant(code).then(data => {
      const { expires_in, access_token, refresh_token } = data.body;
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);
      //res.redirect(`/#/user/${access_token}/${refresh_token}`);
      res.redirect(`http://localhost:3000/faq/${access_token}/${refresh_token}`);
    }).catch(err => {
      res.redirect('/#/error/invalid token');
    });
  }
});





/*

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});
*/