const { mongoose } = require('../Db/connectToDb');

const questionSchema = new mongoose.Schema({
    title: String,
    content:String,
    createdAt: Date,
    status:String,
    authorId: mongoose.Schema.Types.ObjectId,
    lastUpdated: { type: Date, default: Date.now } ,
    images:[],
    tags: [],
    upvotes:[],
    downvotes:[],
    replies :[],
    anscestry:[], 
});

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };
