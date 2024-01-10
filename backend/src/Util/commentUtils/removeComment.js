const { User, Comment } = require("../../Model/export");
const { getDocFromToken } = require("../userUtils/getDocFromToken");

const removeComment = async (commentId, token) => {
  try {
    const userDoc = await getDocFromToken(token);

    if (!userDoc) {
      return { success: false, message: 'User document not found' };
    }
    userDoc.answeredQuestions = userDoc.answeredQuestions.filter(
      (id) => id.toString() !== commentId.toString()
    );

    await userDoc.save();
    const deleteResult = await Comment.deleteOne({ _id: commentId });

    if (deleteResult.deletedCount === 0) {
      return { success: false, message: 'Comment not found or not deleted' };
    }

    return { success: true, message: 'Comment has been deleted successfully' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error removing comment', error };
  }
};

module.exports = { removeComment };
