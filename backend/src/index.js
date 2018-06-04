const express = require('express')
const app = express()

const client_id = '6a37cf1e18fd4b2495b1ebd805e02b9d'; // Your client id
const client_secret = '1f744596799f4f97a82a9dbf8d1b809c'; // Your secret
const redirect_uri = 'http://localhost:8080/callback'; // Your redirect uri
const stateKey = 'spotify_auth_state';


app.get('/', function (req, res) {
  res.send('Hello World!')
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

/*
app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());*/

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
