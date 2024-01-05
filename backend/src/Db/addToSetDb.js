const {User,Question} = require('../Model/export');



const addToSet = async (query, update,collection) => {
  try {
    // Use updateOne with $addToSet to update the document
    const result = await collection.updateOne(query, update);

    if (result.nModified === 0) {
      // If nModified is 0, it means the element was already in the set
      return { success: false, message: 'Data is already in the set' };
    }

    return { success: true, message: 'Data updated with $addToSet' };
  } catch (error) {
    console.error('Error updating with $addToSet:', error);
    return { success: false, message: 'Error updating with $addToSet' };
  }
};

module.exports = {  addToSet };
