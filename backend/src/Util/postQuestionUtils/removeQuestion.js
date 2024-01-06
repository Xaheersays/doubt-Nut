const {deleteDocFromDb, saveToDb} = require('../../Db/export')
const {Question} = require('../../Model/export')
const {getDocFromToken} = require('../userUtils/getDocFromToken.js')

const removeQuestion = async(qid,token,questionType)=>{
    
    const resp = await deleteDocFromDb(Question,{_id:qid})
    if (!resp.sucesss)return resp
    console.log('question schema se delete')
    const userDoc =await getDocFromToken(token)
    console.log(userDoc)
    if (questionType==='active'){
        userDoc.askedQuestions = userDoc.askedQuestions.filter((id)=>id.toString()!==qid)
    }
    else{
        userDoc.drafts = userDoc.drafts.filter((id)=>id.toString!==qid)
    }
    console.log('done delete')
    const res = await saveToDb(userDoc)
    if (!res.success)return res

    return {
        sucesss:true,
        message:' question deleted'
    }



}
module.exports = {removeQuestion}