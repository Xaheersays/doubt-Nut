const { mongoose } = require('../Db/connectToDb');

const commentSchema = new mongoose.Schema({
    title: String,
    content:String,
    images:[],
    upvotes:Number,
    downvotes:Number,
    createdAt: { type: Date, default: Date.now } ,
    replies :[],
    lastUpdated: { type: Date} 
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };
