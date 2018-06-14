const fs = require('fs');

module.exports = {
    get: function(req, res) {
        let questions_file = fs.readFileSync('./src/faqData.json');
        let data = JSON.parse(questions_file);

        res.status(200);
        res.send(data.questions);
      }
} 