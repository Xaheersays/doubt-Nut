const { mongoose } = require('../Db/connectToDb');

const questionSchema = new mongoose.Schema({
    title: String,
    content:String,
    createdAt: Date,
    status:Boolean,
    lastUpdated: { type: Date, default: Date.now } ,
    images:[],
    tags: [],
    upvotes:{
        type: [], 
        unique: true, 
      },
    downvotes:{
        type: [], 
        unique: true, 
      },
    replies :[],
    anscestry:[], 
});

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };
