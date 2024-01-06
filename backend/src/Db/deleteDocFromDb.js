const deleteDocFromDb = async(collection,conditions)=>{
    try {
        const result = await collection.deleteOne(conditions);
        if (result.deletedCount === 1) {
          return {sucesss:true,message:'Document deleted successfully.'};
        } else {
          console.log();
          return {sucesss:false,message:'Document not found or not deleted.'};
        }
      } catch (error) {
        console.error('Error deleting document:', error);
        return {sucesss:false,message:'error while deleting from db'};
      }
}

module.exports = {deleteDocFromDb}