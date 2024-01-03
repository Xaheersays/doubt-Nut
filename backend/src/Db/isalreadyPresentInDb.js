

const isalreadyPresentInDb = async(collection,conditions) =>{
    const doc = await collection.find(conditions)
    if (doc){
        //returning true which means  already present in db
        return true
    }
    // not present in db
    return false
    
}

module.exports = {isalreadyPresentInDb}