const { fetchDocumentFromDb } = require("../../Db/export")
const { Question } = require("../../Model/export")

const getQuestionFromId = async(qid) =>{
    const qDoc = fetchDocumentFromDb(Question,{_id:qid})
    if (!qDoc){
        return null
    }
    return qDoc
}

module.exports = {getQuestionFromId}