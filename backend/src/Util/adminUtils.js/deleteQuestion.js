const { mongoose } = require("../../Db/connectToDb")
const { fetchDocumentFromDb,deleteDocFromDb } = require("../../Db/export")
const {Report, Question} = require('../../Model/export')
const deleteQuestion =async (reportId)=>{
    const rDoc = await fetchDocumentFromDb(Report,{_id:reportId})
    if (!rDoc){
        return {success:false , message:'report id not found'}
    }
    const qid = rDoc.questionId

    //atomic operation
    const session = await mongoose.startSession();
    session.startTransaction();
    try{
        await deleteDocFromDb(Question, { _id: qid }, { session });
        await Report.findOneAndUpdate(
          { _id: reportId },
          { actionTaken: true },
          { session }
        );
        await session.commitTransaction();
        session.endSession();
        return {success:true , message : 'the action for deletion and updn has been done sucessfully'}
    }catch(err){
        await session.abortTransaction();
        session.endSession();
        console.error('Transaction aborted due to an error:', err);
        return {success:false,message:'action for deletion and updn cant take place right now'}
    }
    
    
}

// testing remaining
module.exports = {deleteQuestion}