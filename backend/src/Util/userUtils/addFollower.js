const {addToSet}  = require('../../Db/export');
const { User } = require('../../Model/export');
const addFollower = async (u1, u2) => {
    try {
      
      if (u1._id.toString() === u2._id.toString()) {
        return { success: false, message: 'A user cannot follow themselves.' };
      }
  
      const resp1 = await addToSet({ _id: u1._id }, { $addToSet: { following: u2._id } },User);
  
      const resp2 = await addToSet({ _id: u2._id }, { $addToSet: { followers: u1._id } },User);
  
      if (!resp1.success || !resp2.success) {
        throw new Error('DB internal error while updating followers.');
      }
  
      return { success: true, message: 'Updating followers and following done.' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  
  module.exports = { addFollower };
  