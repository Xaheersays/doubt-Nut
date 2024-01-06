const {  addToSet } = require('../../Db/export');
const {Question} = require('../../Model/export')

const addDownvote = async (uid, questionID) => {
    try {
      const resp = await addToSet({ _id: questionID }, { $addToSet: { downvotes: uid } },Question);
  
      if (!resp.success) {
        throw new Error('DB internal error while adding downvote.');
      }
  
      return { success: true, message: 'Downvote added.' };
    } catch (error) {
      console.error('error : ',error)
      return { success: false, message: error.message };
    }
  };

module.exports = {addDownvote}
