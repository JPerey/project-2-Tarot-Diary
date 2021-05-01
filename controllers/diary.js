const Reading = require("../models/reading");

module.exports = {
  index,
  show,
  delete: deleteTarot,
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

function show(req, res) {
  Reading.findById(req.params.id, function (err, reading) {
    res.render('./tarot/show', {
      title: 'Reading details',
      reading
    });
  });
}

// function deleteTarot(req, res) {
//   Reading.findById(req.params.id, function(err, reading) {
//       Reading.remove();
//     res.render('diary', { title: 'Tarot Diary', readings });
//   });
// }

function deleteTarot(req, res) {
  //Reading.deleteOne(req.params._id);
  Reading.findByIdAndDelete(req.params.id, function (err, reading) {
    
  });
res.redirect("/diary");
};