const {fetchDocumentFromDb} = require('../../Db/export')
const {Question} =require('../../Model/export')
const questionInDrafts =async (req,res,next) =>{
    const qid = req.params.questionId
    const qDoc = await fetchDocumentFromDb(Question,{_id:qid})
    if (!qDoc){
        return res.json({success:false,messgae:'question not found / db internal errors'})
    }
    if(qDoc.status==='inactive'){
        return res.json({success:false,message:'question not found / '})
    }
    next()

}

module.exports = {questionInDrafts}