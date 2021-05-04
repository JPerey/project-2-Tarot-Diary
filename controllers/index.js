module.exports = {
    index,
    info,
};

function index(req, res) {
    res.render("index", {
        title: "Tarot Diary Home",
    });
};

function info(req, res) {
    res.render("info", {
        title: "Tarot Reading Definitions",
    });
};