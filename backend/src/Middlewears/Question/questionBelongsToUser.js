const {getDocFromToken} = require('../../Util/export')

const questionBelongsToUser =async (req,res,next) =>{
    const qid = req.params.questionId
    const token = req.headers.authorization
    const {questionType} = req.body
    const userDoc = await getDocFromToken(token)
    if (!userDoc){
        return res.status(403).json({
            success:false,
            message:'some thing went wrong token or db'
        })
    }
    if (questionType==='active'){   
        if (! userDoc.askedQuestions.includes(qid)){
            return res.status(404).json({
                success:false,
                message:'question id not valid/not present in user doc'
            })
        }
    }else{
        if (! userDoc.drafts.includes(qid)){
            return res.status(404).json({
                success:false,
                message:'question id not valid/not present in user doc-drafts'
            })
        }
    }
    
    next()
    

}

module.exports= {questionBelongsToUser}