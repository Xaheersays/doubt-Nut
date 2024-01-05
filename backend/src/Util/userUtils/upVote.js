const {  addToSet } = require('../../Db/export');
const {Question} = require('../../Model/export')

const addUpvote = async (uid, questionID) => {
  try {
    const resp = await addToSet({ _id: questionID }, { $addToSet: { upvotes: uid } },Question);

    if (!resp.success) {
      throw new Error('DB internal error while adding upvote.');
    }

    return { success: true, message: 'Upvote added.' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};



module.exports = { addUpvote };
