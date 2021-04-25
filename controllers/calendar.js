module.exports = {
    index,
};

function index(req, res) {
    //let days = [];
    const dateObj = new Date();
    console.log("HELLO THERE 1")
    const monthName = dateObj.toLocaleString("default", {
        month: "long"
    });

    // function month() {

    // }
    let days = 31;

    res.render("calendar", {
        title: "Calendar",
        month: monthName,
        days: days,
    });
};