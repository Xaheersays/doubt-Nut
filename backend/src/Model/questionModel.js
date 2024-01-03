const { mongoose } = require('../Db/connectToDb');

const questionSchema = new mongoose.Schema({
    title: String,
    content:String,
    images:[],
    tags: [],
    upvotes:Number,
    downvotes:Number,
    createdAt: Date,
    answers :[],
    lastUpdated: { type: Date, default: Date.now } 
});

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };
