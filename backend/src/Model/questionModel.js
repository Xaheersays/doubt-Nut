const { mongoose } = require('../Db/connectToDb');

const questionSchema = new mongoose.Schema({
    title: String,
    content: String,
    images: [],
    upVotes: Number,
    downVotes: Number,
    tags: [],
    createdAt: Date,
    lastUpdated: { type: Date, default: Date.now } // Set a default value for lastUpdated
});

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };
