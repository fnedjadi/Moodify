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
        utils.getUserData(req, res, function(req, res, data) {
            console.log("data retrieved from callback");
            console.log(data);
            res.status(200);
            res.send(data.id);
        })

    }

}