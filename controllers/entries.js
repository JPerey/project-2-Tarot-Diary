const Reading = require("../models/reading");

module.exports = {
    create,
};

function create(req, res) {
    Reading.findById(req.params.id, function(err, reading) {
      reading.diaryEntry.push(req.body);
      reading.save(function(err) {
        res.redirect(`/diary/${reading._id}`);
      });
    });
   }