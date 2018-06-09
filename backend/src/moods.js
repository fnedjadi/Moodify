const request = require('request');
const fs = require("fs");


module.exports = {
    get: function (req, res) {

        var moodFile = fs.readFileSync("./src/moods.json");
        var moodJSON = JSON.parse(moodFile);
        res.status(200);
        res.send(moodJSON.moods);
    }
}