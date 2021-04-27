module.exports = {
    index,
    show,
};

function index(req, res) {
    let days;
    const dateObj = new Date();
    console.log("HELLO THERE 1")
    const monthName = dateObj.toLocaleString("default", {
        month: "long"
    });

    if(monthName == "january" || "march" || "may" || "july" || "august" || "october" || "december"){
        days = 31;
    } else if(monthName == "april" || "june" || "september" || "november"){
        days = 30;
    } else {
        days = 28;
    };

    res.render("calendar", {
        title: "Calendar",
        month: monthName,
        days: days,
    });
};

function show(req,res){
    req.redirect("")
}