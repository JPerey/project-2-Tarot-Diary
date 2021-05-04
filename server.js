// Require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require("method-override");
const indexRouter = require("./routes/index");
const diaryRouter = require("./routes/diary");
const tarotRouter = require("./routes/tarot");
const entryRouter = require("./routes/entry");
const port = process.env.PORT || '3000';

// Set up express app
const app = express();

// Connect to DB
require("./config/database");

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride("_method"));

// Mount routes with app.use()

app.use("/", indexRouter);
app.use("/diary", diaryRouter);
app.use("/tarot", tarotRouter);
app.use("/", entryRouter);

// Tell App to listen
app.listen(port, function () {
    console.log(`Express is listening on port:${port}`);
});