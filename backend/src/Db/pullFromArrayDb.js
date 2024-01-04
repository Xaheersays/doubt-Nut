const { User } = require("../Model/export");

const pullFromArray = async (query, update) => {
    try {
      // Use updateOne with $pull to update the document
      const result = await User.updateOne(query, update);
  
      if (result.nModified === 0) {
        // If nModified is 0, it means the element was not found in the array
        return { success: false, message: 'Element not found in the array' };
      }
  
      return { success: true, message: 'Element pulled from the array' };
    } catch (error) {
      console.error('Error pulling element from the array:', error);
      return { success: false, message: 'Error pulling element from the array' };
    }
  };

  module.exports = {pullFromArray}
  
  