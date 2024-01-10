const { commentType } = require("../../Types/commentType")
const {Comment, Question, User} = require('../../Model/export')
const { saveToDb } = require("../../Db/export")
const { getUidFromToken } = require("../userUtils/getUidFromToken")
const {mongoose} =require('../../Db/connectToDb')

const addComment = async(rawComment,parentId,token,type)=>{
    const comment = {...rawComment,
        upvotes:[],
        downvotes:[],
        createdAt:new Date(Date.now()),
        replies :[],
        lastUpdated: new Date(Date.now()),
        parentId

    }
    const safeParseResult = commentType.safeParse(comment)
    if (!safeParseResult.success){
        return safeParseResult
    }
    const uid = await getUidFromToken(token)
    comment['authorId'] = uid ? uid : 'xx'
    const cDoc = new Comment(comment)
    const resp2 = await saveToDb(cDoc)
    if (!resp2.success){
        return resp2
    }
    const cmtId = cDoc._id

    if (type==='answer'){
        // in questions add this cmtIdid to replies and in users's answeredques too
        try {
            const resp = await Question.updateOne(
                { _id: parentId },
                { $push: { replies: cmtId } }
            );
            console.log('reply added successfully', resp);
        } catch (err) {
            console.error(err);
            return { success: false, message: 'cant add comment ques upd' };
        }
        
        try {
            const resp = await User.updateOne(
                { _id: uid },
                { $push: { answeredQuestions: cmtId } }
            );
            console.log('reply added in users answeredQs', resp);
        } catch (err) {
            console.error(err);
            return { success: false, message: 'cant add comment user upd' };
        }
        
        return {success:true , message: 'comment added successfully'}
    }
    else{
        // adding comment to a comment  -> find comment doc with parentId and push commentid cmtid in replies nd same adding it to users answeredQ
        try{
            const resp = await Comment.updateOne(
                        { _id:parentId },
                        { $push:{replies:cmtId} }
            );
        }
        catch(e){
            console.error(e)
            return { success: false, message: 'cant add comment cmt upd' };

        }
        
        try {
            const resp = await User.updateOne(
                { _id: uid },
                { $push: { answeredQuestions: cmtId } }
            );
            console.log('reply added in users answeredQs', resp);
        } catch (err) {
            console.error(err);
            return { success: false, message: 'cant add comment user upd' };
        }
        
        return {success:true , message: 'comment added successfully'}

    }

}
module.exports = {addComment}