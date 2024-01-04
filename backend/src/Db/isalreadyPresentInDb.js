

const isalreadyPresentInDb = async(collection,conditions) =>{
    
    const doc = await collection.findOne(conditions)
    if (doc){
        //user present
        return true
    }
    //not present
    return false
    
}

module.exports = {isalreadyPresentInDb}