const { commentType } = require("../../Types/commentType")
const {Comment, Question, User} = require('../../Model/export')
const { addToSet,saveToDb } = require("../../Db/export")
const { getUidFromToken } = require("../userUtils/getUidFromToken")

const addComment = async(rawComment,qid,token)=>{
    const comment = {...rawComment,
        upvotes:[],
        downvotes:[],
        createdAt:new Date(Date.now()),
        replies :[],
        lastUpdated: new Date(Date.now()),
    }
    const safeParseResult = commentType.safeParse(comment)
    if (!safeParseResult.success){
        return safeParseResult
    }
    const uid = await getUidFromToken(token)
    comment['authorId'] = uid ? uid : 'xx'
    console.log(comment)
    const cDoc = new Comment(comment)
    const cObj = {
        commentId: cDoc._id,
        replies:[],
        ancestry:[]
    }
    const resp1 = await addToSet({_id:qid} ,{ $addToSet: { replies: cObj } },Question )
    const resp2 = await saveToDb(cDoc)
    

    if(uid!==null){
        const resp3 = await addToSet({_id:uid} ,{ $addToSet: { answeredQuestions: cDoc._id } },User)
    }
    if (!resp1.success || !resp2.success){
        return {success:false ,message:'something went wrong while commenting'}
    }
    return {success:true,message:'done commenting'}
    
}
module.exports = {addComment}