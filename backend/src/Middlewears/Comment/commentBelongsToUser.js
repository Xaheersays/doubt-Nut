const {getDocFromToken} = require('../../Util/export')

const commentBelongsToUser =async (req,res,next) =>{
    const qid = req.params.commentId
    const token = req.headers.authorization
    const userDoc = await getDocFromToken(token)
    if (!userDoc){
        return res.status(403).json({
            success:false,
            message:'some thing went wrong token or db'
        })
    }
    if (! userDoc.answeredQuestions.includes(qid)){
        return res.status(404).json({
            success:false,
            message:'comment  id not valid/not present in user doc'
        })
    }
    
    next()
    

}

module.exports= {commentBelongsToUser}