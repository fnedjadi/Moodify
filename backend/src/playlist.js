const request = require('request');
const fs = require('fs');
const utils = require('./utils')

module.exports = {

    generate: function (req, res) {
        let moods_ids = req.query.moods ? req.query.moods.split(',') : [];
        moods_ids = moods_ids.map(x => parseInt(x, 10));

        let mood_file = fs.readFileSync('./src/moodsData.json');
        let mood_json = JSON.parse(mood_file);

        let asked_moods = []
        moods_ids.forEach(x => asked_moods.push(mood_json.moods.find(elt => elt.id === x)));

        let target_features = utils.getTargetFeatures(asked_moods)
        console.log(target_features);
        utils.getUserTopArtists(req, res, function(req, res, error, body) {
            let artists_uris = body.items.map(x => x.uri.replace('spotify:artist:', ''));
            utils.getUserRecommandations(req, res, artists_uris, target_features, function(req, res, error, body) {
                const tracks = body.tracks.map(x => { 
                    return {
                        track_uri: x.uri,
                        name: x.name,
                        artist: x.artists[0].name,
                        album: x.album.name,
                        duration: x.duration_ms
                    }
                });

                res.status(200);
                res.send(tracks);
            })
        })
    },

    submit: function (req, res) {
        let tracks_uris = req.body.map(x => x.track_uri);

        utils.getUserData(req, res, function(req, res, error, body) {
            const user_id = body.id;

            utils.createPlaylist(req, res, user_id, function(req, res, error, body){
                const playlist_id = body.id;
                
                utils.addTrack(req, res, user_id, playlist_id, tracks_uris, function(req, res, error, body)  {

                    res.status(200);
                    res.send('Playlist created.');
                })
            });
        })
    }
}