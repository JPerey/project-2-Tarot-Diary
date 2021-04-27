const Reading = require("../models/reading");

module.exports = {
    index,
};

// function index(req, res) {
//     res.render("diary", {
//         title: "Tarot Diary",
//     });
// };

function index(req, res) {
    Reading.find({}, function (err, readings) {
        res.render('diary', {
            title: 'Tarot Diary',
            readings,
        });
    });
}