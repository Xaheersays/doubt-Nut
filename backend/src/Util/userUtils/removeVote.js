const { Question } = require("../../Model/export");
const {pullFromArray} = require('../../Db/export')
const removeVote = async(uid,qid,arrayType)=>{

    try{
        const resp = await pullFromArray({ _id: qid }, { $pull: { [arrayType] : uid } } , Question);
        if (!resp.success) {
            throw new Error('DB internal error while removing voting.');
          }
        return { success: true, message: 'Successfully updated voting' };
    }
    catch(error){
        console.error(error)
        return { success: false, message: error.message };
        
    }
}

module.exports = {removeVote}