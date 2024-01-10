const { fetchDocumentFromDb } = require("../../Db/fetchDocumentFromDb")
const { Comment } = require("../../Model/export")

const  commentIdPresent = (req,res,next) =>{
    const cid = req.params.commentId
    const doc = fetchDocumentFromDb(Comment,{_id:cid})
    if (!doc){
        return res.send({success:false,message:'no comment found with id this'})
    }
    next()
}

module.exports ={commentIdPresent}