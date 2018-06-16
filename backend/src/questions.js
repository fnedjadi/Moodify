const fs = require('fs');
var nodemailer = require('nodemailer');

module.exports = {
    get: function(req, res) {
        let questions_file = fs.readFileSync('./src/faqData.json');
        let data = JSON.parse(questions_file);

        res.status(200);
        res.send(data.questions);
      },

      
      submit: function(req, res) {
        const email = req.body.name;
        const message = req.body.desc;

        const htmlContent = '<p>Sent by: ' + email + '</p>' +
        '<br>' +
        '<p>Content: ' + message + '</p>';

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'moodify.no.reply@gmail.com',
                pass: 'moodify123'
            }
        });

        var mailOptions = {
            from: "moodify.no.reply@gmail.com",
            to: "moodify.no.reply@gmail.com, ",
            subject: "[MOODIFY][CONTACT] Message from " + email,
            html: htmlContent
        }

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              console.log(err)
              res.status(403);
              res.send("Email could not be sent");
            }
            else {
              console.log(info);
              res.status(200);
              res.send("Message sent");
            }
         });
      }
} 