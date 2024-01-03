const {mongoose} = require('../Db/connectToDb')

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    askedQuestions : [],
    answeredQuestions :[],
    followers:[],
    following:[],
    feed:[],
    pfp : String,
    isAdmin:Boolean
})

const User = mongoose.model('User',UserSchema)
module.exports = {User}