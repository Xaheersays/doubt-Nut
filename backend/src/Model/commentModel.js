const { mongoose } = require('../Db/connectToDb');

const commentSchema = new mongoose.Schema({
    title: String,
    content:String,
    images:[],
    upvotes:Number,
    downvotes:Number,
    createdAt: Date,
    replies :[],
    lastUpdated: { type: Date, default: Date.now } 
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };
