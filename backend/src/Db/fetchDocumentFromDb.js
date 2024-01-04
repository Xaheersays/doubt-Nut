const fetchDocumentFromDb = async(collection,conditions) =>{
    console.log(collection,conditions)
    const doc = await collection.findOne(conditions)
    if (doc){
        //user present
        return doc
    }
    //not present
    return null
    
}

module.exports = {fetchDocumentFromDb}