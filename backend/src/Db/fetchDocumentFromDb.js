const fetchDocumentFromDb = async(collection,conditions) =>{
    try{
        const doc = await collection.findOne(conditions)
        if (doc){
            return doc
            //user present
        }
    }
    catch(error){
        //not present
        console.log(error)
        return null
    }
    
}

module.exports = {fetchDocumentFromDb}