const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const auth = require('./authentication');


/* Express */

const app = express()

app.use(cookieParser());
app.use(cors());


/* Routes */

app.get('/', function (req, res) {
  res.send('Moodify! <a href="/login">login</a>')
})

app.get('/ping', function(req, res) {
  res.send('pong');
})


app.get('/login', auth.login);
app.get('/callback', auth.authCallback);

app.get('logout', auth.logout);

app.get('/userInfo', (req, res) => {
  /*spotifyApi.getMe()
  .then(function(data) {
    res.send(data);
  }, function(err) {
    console.log("Error getting user info: ", err);
    res.send(err);
  })*/
})


app.listen(8080, function () {
  console.log('Moodify Backend - Listening on port 8080')
})