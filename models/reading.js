const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diarySchema = new Schema({
    content: String,
    date: Date,
}, {
    timestamps: true
});

const readingSchema = new Schema({
    question: String,
    card: Number,
    cardChoice: [Number],
    diaryEntry: diarySchema,
}, {
    timestamps: true
});

module.exports = mongoose.model("Reading", readingSchema);