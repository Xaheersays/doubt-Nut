    const {mongoose} = require('../Db/connectToDb')


      const UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        pfp: String,
        isAdmin: Boolean,
        askedQuestions: [],
        answeredQuestions: [],
        followers:[],
        following:[],
        feed: [],
        drafts: [],
        
        //draft logic create a route which accepts headers and extract uname pass and match with the dbs unmae pass and allow the drafts
    },{timestamps:true});
  
    const User = mongoose.model('User',UserSchema)
    module.exports = {User}