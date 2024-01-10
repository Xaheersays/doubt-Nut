const { mongoose } = require('../Db/connectToDb');

const questionSchema = new mongoose.Schema({
    title: String,
    content:String,
    status:String,
    authorId: mongoose.Schema.Types.ObjectId,
    images:[],
    tags: [],
    upvotes:[],
    downvotes:[],
    replies :[],
},{timestamps:true});

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };
