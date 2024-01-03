const { mongoose } = require('../Db/connectToDb');

const questionSchema = new mongoose.Schema({
    title: String,
    tags: [],
    createdAt: Date,
    lastUpdated: { type: Date, default: Date.now } 
});

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };
