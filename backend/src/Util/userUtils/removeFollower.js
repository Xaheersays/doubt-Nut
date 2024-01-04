const {pullFromArray} =require('../../Db/export')
const removeFollower = async (u1, u2) => {
    try {
      // Pull u2._id from the following array of u1
      const resp1 = await pullFromArray({ _id: u1._id }, { $pull: { following: u2._id } });
  
      // Pull u1._id from the followers array of u2
      const resp2 = await pullFromArray({ _id: u2._id }, { $pull: { followers: u1._id } });
  
      if (!resp1.success || !resp2.success) {
        throw new Error('DB internal error while updating followers/following.');
      }
  
      return { success: true, message: 'Successfully updated followers/following.' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  
  module.exports = { removeFollower };
 