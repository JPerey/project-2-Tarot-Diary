module.exports={
    index1,
    index3,
    index4,
};

function index1(req, res){
res.render("tarot1", {
    title: "Single Card Reading",
});
};

function index3(req, res){
res.render("tarot3", {
    title: "Three Card Reading",
});
};

function index4(req,res){
res.render("tarot4", {
    title: "Four Card reading",
});
};
