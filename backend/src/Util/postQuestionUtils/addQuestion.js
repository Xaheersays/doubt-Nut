const {safeParseQuestion} = require('./safeParseQuestion')
const {getDocFromToken} = require('../export')
const  {Question} = require('../../Model/export')
const {saveToDb} =  require('../../Db/export')
const addQuestion = async (token,rawQuestion,questionType) =>{
    let question = {...rawQuestion,
        upvotes:[],
        downvotes:[],
        answers:[],
        lastUpdated:new Date(Date.now()),
        createdAt:new Date(Date.now()),
        
    }

    const result = safeParseQuestion(question)
    if (!result){
        return {
            success:false,
            message:'some thing went wrong question format '
        }
    }

    const questionDoc = new Question(question)
    const resp = await saveToDb(questionDoc)
    if (!resp.success){
        return resp
    }
    const qid = questionDoc._id;

    const userDoc = await getDocFromToken(token)
    if(!userDoc){
        return {success:false,message:'internal db error could not fetch doc'}
    }

    if(questionType==='active'){
        userDoc.askedQuestions.push(qid)
    }
    else{
        userDoc.drafts.push(qid)
    }
    const saveUser  = await saveToDb(userDoc)
    if(!saveUser.success)return saveUser
    return {success:true,message:'question has been posted sucessfully'}
}

module.exports = {addQuestion}