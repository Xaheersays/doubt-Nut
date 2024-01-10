const { fetchDocumentFromDb } = require("../../Db/fetchDocumentFromDb")
const { Question } = require("../../Model/questionModel")

const  questionIdPresent = (req,res,next) =>{
    const qid = req.params.questionId
    const doc = fetchDocumentFromDb(Question,{_id:qid})
    if (!doc){
        return res.send({success:false,message:'no question  found'})
    }
    next()
}

module.exports ={questionIdPresent}