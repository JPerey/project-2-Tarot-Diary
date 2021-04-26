module.exports={
    new1,
    new3,
    new4,
    create,
};

function new1(req, res){
res.render("./tarot/new1", {
    title: "Single Card Reading",
});
};

function new3(req, res){
res.render("./tarot/new3", {
    title: "Three Card Reading",
});
};

function new4(req,res){
res.render("./tarot/new4", {
    title: "Four Card reading",
});
};

function create(req,res){
    console.log(req.body);
    //
}
