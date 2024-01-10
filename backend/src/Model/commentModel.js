const { mongoose } = require('../Db/connectToDb');

const commentSchema = new mongoose.Schema({
    title: String,
    content:String,
    images:[],
    upvotes:[],
    downvotes:[],
    replies :[],
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    parentId:{
        type:mongoose.Schema.Types.ObjectId
    },
    // isParentQuestion : Boolean

},{timestamps:true});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };