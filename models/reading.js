const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diarySchema = new Schema({
    content: String,
}, {timestamps: true});

const readingSchema = new Schema({
    question: String,
    cards: Number,
    cardChoice: [number],
    diaryEntry: diarySchema,
}, {timestamps: true});

module.exports = mongoose.model("Reading", readingSchema);