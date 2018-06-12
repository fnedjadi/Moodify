const request = require('request');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const auth = require('./authentication');
const moods = require('./moods');
const playlist = require('./playlist');

/* Express */

const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());


/* Routes */

app.get('/', function (req, res) {
  res.send('Moodify! \
  <a href="/login">login</a>\
  <a href="/userInfo">userInfo</a>')
})

app.get('/ping', function(req, res) {
  res.send('pong');
})


// Authentication
app.get('/login', auth.login);
app.get('/callback', auth.authCallback);

app.get('/logout', auth.logout);

app.get('/userInfo', auth.userInfo);

// Moods
app.get('/moods/get', moods.get);
app.get('/playlist/generate', playlist.generate);
app.post('/playlist/submit', playlist.submit);



app.listen(8080, function () {
  console.log('Moodify Backend - Listening on port 8080')
})