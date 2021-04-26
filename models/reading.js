const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const readingSchema = new Schema({
    question: String,
    cards: Number,
    cardChoice: [],
    

})