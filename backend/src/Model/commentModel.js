const { mongoose } = require('../Db/connectToDb');

const commentSchema = new mongoose.Schema({
    title: String,
    content:String,
    images:[],
    upvotes:[],
    downvotes:[],
    createdAt:  { type: Date, default: Date.now },
    replies :[],
    lastUpdated: { type: Date, default: Date.now } ,
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };